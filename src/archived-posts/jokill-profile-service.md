---
title: 'Creating Jokill Profile Service'
date: '2021-05-30'
tags: ['Jokill', 'Java', 'SpringBoot']
---

The first microservice to be built is the Jokill Profile Service. It will be responsible to manage everything profile-related. In this first iteration, it will be a simple CRUD microservice to handle profile info from our users.

I will be using JPA for persistance and the first model for a profile will be this:

```java
public class Profile {
    @Id
    @Column(length = 36, unique = true, nullable = false)
    private UUID profileId;

    @Column
    private String userName;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;
}
```
Every CRUD operation (Create, Read, Update, Delete) will have its controller and service to keep controllers and services doing only one thing. All of them will use a ProfileRepository which is a standard implementation of a JpaRepository.

I will reproduce here controllers and services. As you may see they are super simple at this stage. Let's try to keep them like that.

```java
@RestController
@RequiredArgsConstructor
public class CreateProfileController {

    private final CreateProfileService createProfileService;

    @PostMapping("/profile")
    @ResponseStatus(HttpStatus.CREATED)
    public UUID createProfile(@RequestBody CreateProfileDTO createProfileDTO) {
        return createProfileService.createProfileAndReturnId(createProfileDTO);
    }

}
```

```java
@Service
@Slf4j
@RequiredArgsConstructor
public class CreateProfileService {

    private final ProfileRepository repository;

    private final IdentifierGeneratorService identifierGeneratorService;

    public UUID createProfileAndReturnId(CreateProfileDTO profileData) {
        Profile persistedProfile = repository.save(mapCreateProfileDTOtoProfile(profileData));
        return persistedProfile.getProfileId();
    }
}
```

```java
@RestController
@RequiredArgsConstructor
public class UpdateProfileController {

    private final UpdateProfileService updateProfileService;

    @PutMapping("/profile/{profileId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateProfile(@PathVariable("profileId") UUID profileId, @RequestBody CreateProfileDTO createProfileDTO) throws NotFoundException {
        updateProfileService.updateProfile(profileId, createProfileDTO);
    }
}
```

```java
@Service
@RequiredArgsConstructor
public class UpdateProfileService {

    private final ProfileRepository profileRepository;

    @Transactional
    public void updateProfile(UUID profileId, CreateProfileDTO createProfileDTO) throws NotFoundException {
        Profile foundProfile = profileRepository.findById(profileId).orElseThrow(() -> new NotFoundException("Profile not found"));
        updateFoundProfile(foundProfile, createProfileDTO);
    }

    private void updateFoundProfile(Profile profile, CreateProfileDTO createProfileDTO) {
        profile.setEmail(createProfileDTO.getEmail());
        profile.setFirstName(createProfileDTO.getFirstName());
        profile.setLastName(createProfileDTO.getLastName());
        profile.setUserName(createProfileDTO.getUserName());
    }
}
```

```java
@RestController
@RequiredArgsConstructor
public class GetProfileController {

    private final GetProfileService getProfileService;

    @GetMapping("/profile/{profileId}")
    public ProfileDTO getProfile(@PathVariable String profileId) throws NotFoundException {
        UUID profileUuid = UUID.fromString(profileId);
        return getProfileService.getProfileById(profileUuid);
    }

    @GetMapping("/profile")
    public List<ProfileDTO> getAllProfiles() {
        return getProfileService.getAllProfiles();
    }

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<String> handleNotFoundException(NotFoundException exception) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(exception.getMessage());
    }
}
```

```java
@Service
@RequiredArgsConstructor
public class GetProfileService {

    private final ProfileRepository profileRepository;

    private final ProfileEntityMapper profileEntityMapper;

    public ProfileDTO getProfileById(UUID profileId) throws NotFoundException {
        Optional<Profile> foundProfile = profileRepository.findById(profileId);
        return foundProfile.map(profileEntityMapper::toProfileDTO)
                .orElseThrow(() -> new NotFoundException("Profile not found"));
    }

    public List<ProfileDTO> getAllProfiles() {
        List<Profile> foundProfiles = profileRepository.findAll();
        return foundProfiles.stream().map(profileEntityMapper::toProfileDTO).collect(Collectors.toList());
    }
}
```

```java
@RestController
@RequiredArgsConstructor
public class DeleteProfileController {

    private final DeleteProfileService deleteProfileService;

    @DeleteMapping("/profile/{profileId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProfile(@PathVariable("profileId") UUID profileId) throws NotFoundException {
        deleteProfileService.deleteProfile(profileId);
    }
}
```

```java
@Service
@RequiredArgsConstructor
public class DeleteProfileService {

    private final ProfileRepository profileRepository;

    public void deleteProfile(UUID profileId) throws NotFoundException {
        try {
            profileRepository.deleteById(profileId);
        } catch (RuntimeException ex) {
            throw new NotFoundException("Couldn't remove element with UUID "+ profileId.toString());
        }
    }
}
```

With unit tests covering all controllers and services and an Integration Test making REST calls to endpoints, this microservice is ready to start storing users.

In the next steps, I will convert the Integration test into a more BDD (Behavior Driven Development) approach using [Cucumber](https://www.baeldung.com/cucumber-spring-integration).

This also requires security. I will take care about all those concerns in the next steps.

You can check the code of the microservice [here](https://github.com/rlence86/jokill-profile-service).