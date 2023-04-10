# Mysterious Organism :dna:
Codecademy Mysterious Organism Project.
## Project Context & Objective :microscope:
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
    
    <sub>This method simulates *P. aequor‘s* high rate of mutation (change in its DNA). It randomly selects a base in the object’s dna property and changes the current base to a different base. Then .mutate() will return the object’s mutated dna.</sub>
    
* compareDNA()
    
    <sub> This method takes in another pAequor object as a parameter and compares their DNA sequences. The method compares how many bases are identical and in the same locations. It returns a message which states the percentage of DNA the two objects have in common. </sub>
    
* willLikelySurvive()

    <sub> Only organisms which DNAs consist in 60% of 'C' or 'G' base are likely to survive. willLikelySurvive() returns a boolean (true or false) which indicates whether the orgnism in question is likely to survve.</sub>
    
* complementStrand()

    <sub>This method returns the complementary DNA strand. ('A's swap with 'T's and vice versa. Also, 'C's match with 'G's and vice versa.) For example, an organism with dna ['A', 'T', 'C', 'C', 'T', 'C', 'A', 'G', 'G', 'T', 'G', 'C', 'C', 'T', 'A'] will have a complementary DNA of ['T', 'A', 'G', 'G', 'A', 'G', 'T', 'C', 'C', 'A', 'C', 'G', 'G', 'A', 'T'].</sub>

#### 3. Array, (or a list) of thirty organisms likely to survive
30 instances of the of pAequor that can survive in their natural environment have been pushed to the sampleList variable for the team's research purposes.

#### 4. Tests
A number of tests have been set up on the bottom of the code to be printed to the console and check the functionality of the programme
