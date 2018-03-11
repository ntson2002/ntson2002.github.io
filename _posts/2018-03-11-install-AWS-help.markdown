---
layout: post
comments: true
title:  "Install AWS GPU"
excerpt: "Install AWS GPU"
date:   2018-03-11 17:00:00
mathjax: true
---




## Download the certificate file

```
cd $HOME
cp /Users/sonnguyen/Downloads/AWS-P2-00065_certificate.pem $HOME/.ssh
chmod 700 $HOME/.ssh/AWS-P2-00065_certificate.pem

vim $HOME/.bash_profile

alias AWS1='ssh -i $HOME/.ssh/AWS-P2-00065_certificate.pem ec2-user@150.65.9.225'
```

## mount amazon disk
```
cd $HOME
mkdir storage
sudo mkfs -t ext4 /dev/xvdb
sudo mount /dev/xvdb ./storage
sudo chmod 700 storage
```


## Install CUDA, CuDNN, Conda, Tensorflow

Help: [https://gist.github.com/zhanwenchen/e520767a409325d9961072f666815bb8#install-cuda]()

### step 1
```
wget https://developer.nvidia.com/compute/cuda/8.0/Prod2/local_installers/cuda_8.0.61_375.26_linux-run

chmod +x cuda_8.0.61_375.26_linux-run
./cuda_8.0.61_375.26_linux.run --extract=/home/ec2-user/storage/downloads
```

### step 2:
Execute the second one to install the CUDA Toolkit 8.0:

```
rm -r /usr/local/cuda
sudo ./cuda-linux64-rel-8.0.61-21551265.run
```

### step 3:

modify $HOME/.bashrc to update `LD_LIBRARY_PATH `

```
# cuda-8.0
export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64:${LD_LIBRARY_PATH}
```


### step 4
Install MiniConda
```
wget https://repo.continuum.io/miniconda/Miniconda2-latest-Linux-x86_64.sh
bash Miniconda2-latest-Linux-x86_64.sh

source $HOME/.bashrc
conda create -n py27 python=2.7
source activate py27
conda install cudnn=5.1
```

### step 5

 modify $HOME/.bashrc

```
# cundnn=5.1
export LD_LIBRARY_PATH=/home/ec2-user/storage/miniconda2/envs/py27/lib:${LD_LIBRARY_PATH}
```

### step 6
Install tensorflow 
```
pip install https://pypi.python.org/packages/04/c4/ffb89dbea9e43e82665ff088fd08aa25aa93301aa8c480de278c8f576ea1/tensorflow_gpu-1.0.1-cp27-cp27mu-manylinux1_x86_64.whl#md5=c06b11dee765a99b1814ca393aaf558a
```

## MOUNT JAIST STORAGE

```
cd $HOME
mkdir sonnguyen
sudo yum install cifs-utils
sudo vim /etc/fstab 
```

### add text
``
//i1501.jaist.ac.jp/i1501/s1520203 /home/ec2-user/sonnguyen 	cifs uid=ec2-user,noauto,user,username=s1520203,domain=ad,vers=3.0,file_mode=0700,dir_mode=0700 0 0
``

### mount jaist storage

```
sudo mount sonnguyen
```



