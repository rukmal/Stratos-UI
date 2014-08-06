# Apache Stratos UI

## Running the site

Clone the repository, compile the jade files and serve the site locally.
```bash
$ git clone https://github.com/rukmal/Stratos-UI.git
$ sh compile.sh
$ python -m SimpleHTTPServer
```

## Usage

### Cleaning files up

After cloning this repo, clean up existing html files by running:
```bash
$ sh cleanup.sh
```

### Compiling from Jade

To compile the site from jade, run:
```bash
$ sh compile.sh
```

### Recompiling from Jade

To recompile the site (i.e. remove old files and compile), run:
```bash
$ sh recompile.sh
```