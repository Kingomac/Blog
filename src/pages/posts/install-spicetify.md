---
layout: '../../layouts/PostLayout.astro'
title: 'How to install Spicetify on Fedora'
description: 'Spicetify is a powerful CLI tool that allow users to add extensions and themes from a rich marketplace. However, installing it on Linux can be tricky given the wide range of distros with different packet managers and stores people use. In this tutorial, I will go through the installation process on Fedora 38.'
pubDate: 2023-08-05
author: 'Mario'
tags: ['second']
---

<section>


[Spicetify](https://spicetify.app/) is a powerful CLI tool that allow users to add extensions and themes from a rich marketplace. However, installing it on Linux can be tricky given the wide range of distros with different packet managers and stores people use. In this tutorial, I will go through the installation process on Fedora 38.


</section>

<section>

## Install Spotify

First we need to install the official Spotify app. We'll go with the software store version, in particular, it's the [flathub](https://flathub.org/) one.

![](/posts-img/install-spicetify/software-client.webp)

</section>


<section>

## Install Spicetify

1. Run the following command to install it from shell:
```shell
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh | sh
```

2. Open the Spicetify config file in the path `~/.config/spicetify/config-xpui.ini` with your prefered editor.

3. Check the value of `spotify_path`, it may be written. In this case, using Flatpak is usually:
```
/var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/
```

You can check it with the command:

```shell
flatpak --installations
echo $(flatpak --installations)/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/
```

3. Now we'll write the value of `prefs_path`. In Fedora, using Flatpak it should be `~/.var/app/com.spotify.Client/config/spotify/prefs`. If it's not there check `~/.config/spotify/prefs` and write it on the Spicetify config file.

4. Add read and write permission to your user in the Spotify client files:
```shell
sudo chmod a+wr /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify
sudo chmod a+wr -R /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/Apps
```

5. Install the Spicetify Marketplace
```shell
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```

6. Close and open a new terminal and patch the program with:
```shell
spicetify backup apply
```

To restore it:
```shell
spicetify restore backup
```

</section>

