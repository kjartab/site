all:
    @echo "Doing all"

deploy:
    @echo "Pushing to production"
    @git push git@www.kartan.no:~/site master

update:
    @echo "Makefile: Doing UPDATE stuff like grunt, gulp, rake,..."
    @whoami
    @pwd