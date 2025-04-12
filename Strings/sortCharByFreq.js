var frequencySort = function(s) {
    const mp = new Map();
    for (const char of s) {
        mp.set(char, (mp.get(char) || 0) + 1);
    }
    
    const r = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]));
    let ss = '';
    for (const [char, freq] of r.entries()) {
        ss += char.repeat(freq);
    }
    
    return ss;
};
