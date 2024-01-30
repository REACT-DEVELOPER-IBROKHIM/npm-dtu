
# DTU ( DATA TYPE UTILITIES )

How to use:

  in ES6+

  1. `import "dtu"`

  in ES5 

  2. `require "dtu"`


This package is used for saving time in simple and daily workflows. For example: 
  1. String modification

  * uppercase first letter, last letter or any letter ( String.up( <number> || "end" || undefined ))
  * lowercase first letter, last letter or any letter ( String.low( <number> || "end" || undefined ))
  * easy reverse of letters ( String.revorder( <string> || string: ? ))

  2. Array modification

  * remove duplicates with a single method ( Array.removeDuplicates() )
  * filter array which leaves only given data type ( Array.arrOnly("string" || "number" || ... ))
 
  3. Compare data types

  * compare data easily with isEqual() function ( <data>isEqual(<comparedData>))
    `true | false` 