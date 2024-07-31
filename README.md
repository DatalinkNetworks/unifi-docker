# unifi-docker

This is a template to run the new `linuxserver/unifi-network-application` with an external mongodb instance.


### Step 1) Clone/Download the Repo
Clone the repository or download it as a ZIP file and extract it to the preferred destination.

    git clone https://github.com/DatalinkNetworks/unifi-docker && cd unifi-docker

### Step 2) Modify the `docker-compose.yml` file as needed
You may want to modify the volume location or network layout attributes depending on your environment. By default, it will use volumes created within this docker compose environment and attach to the host network for the Unifi application with a separate backend network for the database.

### Step 3) Set a password

The password must be set in two different files:
 - ./init/init-mongo.js
 - ./env/unifi.env

Change the password from `CHANGEMEPLEASE` to the one you have generated.

### Step 4) Run!

Brining up the docker compose package should be sufficient to start running things:

    docker compose up -d
