#!/bin/bash

# check if script is run as root
if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

# check if the user has provided a path to the Kali Linux ISO
if [ -z "$1" ]
  then
    echo "Please provide a path to the Kali Linux ISO"
    exit
fi

# unmount the USB drive if already mounted
umount /dev/sdb1

# write the ISO to the USB drive
dd if=$1 of=/dev/sdb bs=4M status=progress oflag=sync
