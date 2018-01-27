function sortAnArray(input) {
   let result = input.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))
        .sort((a,b) => a.length - b.length);
    console.log(result.join('\n'));
}
sortAnArray(['alpha',
    'beta',
    'gamma'])