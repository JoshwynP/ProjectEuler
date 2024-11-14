/** 
*    Euler Project - Problem 81 
*    Path Sum: Two Ways
*    @author Joshwyn Parekh
*/

/**
 * In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom
 * right, by only moving to the right and down, is indicated in bold red and is equal
 * to 2427.
 *     
 *  +131  673  234  103   18
 *  +201  +96 +342  965  150
 *   630  803 +746 +422  111
 *   537  699  497 +121  956
 *   805  732  524  +37 +331


 *  +131  673  234  103   18
      1    1    1    1    1
     131  800  1034 1037  1100

 *  +201  +96 +342  965  150
      1    2    3    4    5
     333  896
          429

 *   630  803 +746 +422  111
      1    3    6    10   15

 *   537  699  497 +121  956
      1    4    10   20   35

 *   805  732  524  +37 +331
      1    5    15   35   70
 * 
 *
 * Find the minimal path sum from the top left to the bottom right by only moving right
 * and down in matrix.txt (right click and "Save Link/Target As..."), a 31K text file
 * containing an by matrix.
 * 
 * 
 * Solution Idea *
 * Go row by row (one line at a time), compare top and left values, find min
 */
// Usage
if (process.argv.length != 3) {
  console.log('Usage: node ' + process.argv[1] + ' matrixFile.txt');
  process.exit(1);
}
// Read the file and print its contents.
let fs = require('fs');
let filename = process.argv[2];
// TODO: Read the file one line at a time (that's a better pattern).
try {
     var data = fs.readFileSync(filename,'utf8');

     let matrix = data.split('\n').map(row => row.split(',').map(Number));

     // console.table(matrix);

     const rowLength = matrix.length;
     const columnLength = matrix[0].length;
     var sum = 0;
     let sumMatrix = [];

     for (let i = 0; i < rowLength; i++) 
     {
          sumMatrix[i] = new Array(columnLength).fill(0);  
     }

     for (var i = 0; i < rowLength; i++)
     {
          for (var j = 0; j < columnLength; j++)
          {               
               if ( i == 0 && j == 0 ) //if row = 1 & column = 1 stop
               {    
                    sumMatrix[i][j] = matrix[i][j];
               }
               else if ( i == 0 ) // if (i)row = 1, but column not check left
               {
                    sumMatrix[i][j] = sumMatrix[i][j-1] + matrix[i][j];                    
               }
               else if ( j == 0 ) // if (j)column = 1, but row not check up
               {
                    sumMatrix[i][j] = sumMatrix[i-1][j] + matrix[i][j];
               }
               else // if both not 1 check left and up
               {
                    sumMatrix[i][j] = Math.min(sumMatrix[i-1][j], sumMatrix[i][j-1]) + matrix[i][j];
               }
               
          }
     }
     sum = sumMatrix[rowLength-1][columnLength-1];
     console.log("The lowest path is: ", sum);
     
     /*
     var sums = [];
     for (var i = 0; i < rowLength; i++)
     {
          sums[i] = 0;
     }
     */

} catch(err) {
     console.error(err);
}
