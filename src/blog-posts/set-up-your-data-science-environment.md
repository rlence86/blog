---
title: 'Set up your data science environment'
date: '2020-02-17'
tags: ['AI', 'Data science', 'Docker']
---

If you want to use an environment for doing data science with [Jupyter Notebook](https://jupyter.org/), the quickest approach is using [Google Colab](https://colab.research.google.com/). There, you will be able to use all the power from Google servers to do Machine Learning or even Deep Learning, using their dedicated graphic cards (GPU) for free.

For some experiments that could be ok, but some of you could be worried about the privacy of your data if you put them in Google Cloud to do inferences.

Another quick approach, but with much more privacy for your data, is using [Jupyter Docker Stacks](https://jupyter-docker-stacks.readthedocs.io/en/latest/) where you can find the one that fits more your needs.

First thing you need to do is [selecting an image](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html). For doing some Data Science with Python I think the stack scipy-notebook is more than enough. It includes libraries like [Pandas](https://pandas.pydata.org/) and [Scikit-learn](https://scikit-learn.org/stable/) which are widely used. It also includes many other data visualization libraries. 

If you want to do some deep learning, you will need to use tensorflow-notebook which includes [Tensorflow](https://www.tensorflow.org/) and [Keras](https://keras.io/).

To make this work, you have to run docker image:

```bash
docker run -p 8888:8888 jupyter/scipy-notebook
```

This will download all images the first time and run your server. You will be able to access the Jupyter Notebook server from your browser, just clicking the link your console will provide you.

Then, in your browser, you will be able to start creating your Jupyter files by clicking in New -> Python3.

To finish your session, you can click Quick in the upper right of your Jupyter home screen or terminate the process running in your console. This will stop your docker container. You will be able to check if it is still running by doing:

```bash
docker ps
```

Bear in mind your computer power. It will affect the learning time required for your algorithms and, unless you have a super-powerful computer for ML, will be much slower than using Google Colab.