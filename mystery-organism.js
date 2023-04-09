// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let dnaStrand = mockUpStrand()//saves a random dnaStrand to be passed as argument to the pAequorFactory

//organism object factory
const pAequorFactory = (num, dnaStrand) => {
  return {
    specimenNum: num,
    dnaStrand: mockUpStrand(),
    mutate(){
      let randomDnaBase = returnRandBase();//selects a random dna Base
      //console.log(randomDnaBase, 'random base')
      let mutatedDnaBase = this.dnaStrand.findIndex(dna => { return dna === randomDnaBase})//finds the index position of the random dna base
      //console.log(mutatedDnaBase, 'mutatedDnaBase index')
      let mutatedDNAStrand = this.dnaStrand
      mutatedDNAStrand[mutatedDnaBase] = returnRandBase()
      //console.log(mutatedDNAStrand, 'print')
      //return mutatedDNAStrand
      //my too long if statement to get the randomDnaBase replaced with a DNA Strand which is different to the random DNA strand
      if( randomDnaBase === 'A'){
        let otherDnaBases = ['T', 'C', 'G'];
        let one = otherDnaBases[Math.floor(Math.random()*3)];
        //console.log(one, 'mutated random base(from if statement)')
        mutatedDNAStrand[mutatedDnaBase] = one
      }else if(randomDnaBase === 'T'){
        let otherDnaBases = ['A', 'C', 'G'];
        let one = otherDnaBases[Math.floor(Math.random()*3)];
        //console.log(one, 'mutated random base(from if statement)')
        mutatedDNAStrand[mutatedDnaBase] = one
      } else if (randomDnaBase === 'C'){
        let otherDnaBases = ['A', 'T', 'G'];
        let one = otherDnaBases[Math.floor(Math.random()*3)];
        //console.log(one, 'mutated random base(from if statement)')
        mutatedDNAStrand[mutatedDnaBase] = one
      } else if(randomDnaBase === 'G'){
        let otherDnaBases = ['A', 'T', 'C'];
        let one = otherDnaBases[Math.floor(Math.random()*3)];
        //console.log(one, 'mutated random base(from if statement)')
        mutatedDNAStrand[mutatedDnaBase] = one
       
      }
      console.log('mutated below')
      return mutatedDNAStrand;
      //console.log(mutatedDNAStrand, 'mutated')
    },
    compareDNA(pAequor){
      //comparing the dna Strand wih another organism
      sameSame = this.dnaStrand.map(function(letter, i){
        return letter === pAequor.dnaStrand[i];
      });
    
      //counting the number of instances where dna base is the same
      let counter = 0
      for(let i =0; i<sameSame.length; i++){
        if (sameSame[i]===true){
          counter +=1;
        }
      }
      //console.log(counter)

      //calculting the similarity of the DNA in %
      let dnaSimilarity = ((counter / sameSame.length) * 100).toFixed(1);
    console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${dnaSimilarity}% DNA in common`);
    },
    //if DNA Strand is from at least 60% formed from C or G it is likely to survive
    willLikelySurvive(){
      let counter = 0;
      
      for(let i =0; i < this.dnaStrand.length; i++){
          if (this.dnaStrand[i] === 'C' || this.dnaStrand[i] === 'G'){
              counter +=1; 
              
            }  //return counter >= 9;
          }
          //console.log(counter)
         let willSurvive = counter >= 9; // 9 out of 15 is 60%
          return willSurvive;
    },
    //Complement Strand - where original strand has A reversed with T and G reversed with C
    complementStrand(){
      const swapBase = this.dnaStrand.map(function(base){

        switch(base){
            case 'A':
                return 'T';
                break;
            case 'T':
                return 'A';
                break;
            case 'C':
                return 'G';
                break;
            case 'G':
                return 'C';
                break;
        }
        
    })
    return swapBase;
    }
  }
}

  // 30 instances of the organism that is likely to survive
  
  let sampleList = []
  let idCounter = 1;
  while(sampleList.length < 30){
    let sample = pAequorFactory(idCounter,dnaStrand);
   if(sample.willLikelySurvive())
      sampleList.push(sample);
    idCounter++;
  }
  
  
//get 30 instances
console.log(sampleList[29].dnaStrand)
console.log(sampleList[28].dnaStrand)
console.log(sampleList[27].dnaStrand)
console.log(sampleList[25].dnaStrand)
//console.log(sampleList[29].willLikelySurvive())
//console.log(sampleList[29].compareDNA(sampleList[1]))

///TESTS`

const organism1 = pAequorFactory(1,dnaStrand)
console.log(organism1.dnaStrand, 'organism1')
//console.log(organism1.dnaStrand, 'organism1')

//console.log(organism1.mutate());
//console.log(organism1.willLikelySurvive());
console.log(organism1.complementStrand(), 'complementedStrand')

const organism2 = pAequorFactory(2,dnaStrand)

//console.log(organism2.dnaStrand, 'organism2')
/*
organism2.mutate();
*/


const organism3 = pAequorFactory(3,dnaStrand)
/*
console.log(organism3.dnaStrand, 'organism3')
organism3.mutate();
*/

//Test comapare DNA strands
//organism1.compareDNA(organism3)

//Test likely to survive
//organism1.willLikelySurvive()