---
title: Astrophysics research
eyebrow: Research
lead: >-
  Active Galactic Nuclei, k-means for spectra and a supernova. My contributions
  from my years as an astrophysicist.
description: PhD thesis, peer-reviewed papers and other astrophysics contributions of Ignacio Ordovás Pascual.
banner: /assets/img/intro/collage_astro.jpg
permalink: /astro/
---

My astrophysics work started in the Canary Islands while I was studying, and continued in Santander at the Institute of Physics of Cantabria, where I did my PhD. During the PhD I was also a visiting research fellow at the Brera Observatory in Milan and the National Observatory of Athens.

The full list of papers and contributions is on [NASA ADS](https://ui.adsabs.harvard.edu/search/q=orcid%3A0000-0002-1993-0334&sort=date%20desc%2C%20bibcode%20desc&p_=0).

## Active Galactic Nuclei

During the 18th and 19th centuries it was not clear whether the "nebulae" seen in the sky were part of our galaxy or "island universes" made of stars ([Kant 1755](https://en.wikipedia.org/wiki/Universal_Natural_History_and_Theory_of_the_Heavens)). The discovery in 1924 of a Cepheid variable star in M31 ([Hubble 1929](https://articles.adsabs.harvard.edu/pdf/1929ApJ....69..103H)), whose properties reveal its distance, showed that some of them were galaxies like the Milky Way. Spectroscopy soon revealed that some galaxies have emission lines of highly ionised elements in their nuclei ([Seyfert 1943](https://ui.adsabs.harvard.edu/abs/1943ApJ....97...28S/abstract)) that stars alone cannot explain. In some of them this non-stellar light completely outshines the galaxy. These are **Active Galactic Nuclei** (AGN).

Today we know this emission comes from supermassive black holes of 10<sup>6</sup>–10<sup>9</sup> solar masses at the centres of galaxies. Material falling into their gravitational well releases energy through *accretion*, which powers the electromagnetic emission.

I studied the relation (or lack of it) between optical extinction, X-ray absorption and the classification of AGN.

{% assign agn = site.data.publications | where: "topic", "agn" %}
<ul class="pubs">
{%- for pub in agn %}{% include publication.html pub=pub %}{% endfor %}
</ul>

## K-means clustering in astrophysics

My first experience with machine learning was my Master's thesis, supervised by [Jorge Sánchez Almeida](http://research.iac.es/galeria/jos/) at the Instituto de Astrofísica de Canarias. I applied k-means to galaxy spectra using a modified, single-pass version of the algorithm that updates cluster centroids on the fly. Later I collaborated on the first steps of a study applying k-means to stars in the [APOGEE survey](https://www.sdss.org/dr14/irspec/).

{% assign km = site.data.publications | where: "topic", "kmeans" %}
<ul class="pubs">
{%- for pub in km %}{% include publication.html pub=pub %}{% endfor %}
</ul>

## Supernova classification

At the NEON Observing School 2015 in Asiago (Italy), I took part in an observing campaign where we classified a supernova six days after its peak brightness. [The classification was published in The Astronomer's Telegram](https://www.astronomerstelegram.org/?read=7120).
