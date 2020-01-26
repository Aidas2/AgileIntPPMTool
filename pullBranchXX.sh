#! /bin/bash
cd /media/aidas/749AEABE9AEA7BCC/Backup_Linux/Documents/AgileIntPPMTool
git branch branch43
git checkout branch43
git add .
git commit -m "Backlog reducer"
git push --set-upstream origin branch43
git checkout master
git merge branch43
git push
