# Mysterious Organism
Codecademy Mysterious Organism Project.
## Project Context & Objective
The objective of this project is to create objects that simulate the DNA of *P. aequor* - a new mysterious organism found at the bottom of the ocean near hydrothermal vents.

*P. aequor* is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make *P. aequor* an interesting specimen to study. However, *P. aequor* cannot survive above sea level and locating *P. aequor* in the deep sea is difficult and expensive.
In this project, the steps have been taken to create objects that simulate the DNA of P. aequor for the research team to study.

## Code Overview:
1. Helper functions
2. Function Factory
3. Array, (or a list) of thirty organisms likely to survive
4. Tests

#### 1. Helper functions
* returnRandBase() returns a random DNA base 

    <sub>DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').</sub>

* mockUpStrand() returns a single random strand of DNA containing 15 bases

    <sub>for example: ['T', 'G', 'G', 'C', 'T', 'C', 'G', 'C', 'C', 'T', 'A', 'A', 'T', 'G', 'G'].</sub>
    
#### 2. Function Factory 
pAequorFactory() is an Function Factory. The primary focus of the pAequorFactory() is to produce multiple objects, or instances of the *P. aequor* organism. Primarily, the output of the pAequorFactory() incudes:
* *P. aequor* object with a unique number
* *P. aequor* object with a randomly assigned DNA strand with 15 bases

The Object Factory has the following methods which can be called on the pAequorFactory() produced instances of the *P. aequor* organism:
* mutate()
* compareDNA()
* complementStrand()


