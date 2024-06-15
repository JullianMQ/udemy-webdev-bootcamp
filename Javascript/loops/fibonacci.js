function fibonacci(num) {
    let output = [];
    let count = 1;
    if (num === 0) {
        return output;
    } else if (num === 1) {
        return output = [0];
    } else if (num === 2) {
        return output = [0, 1];
    } else {
        while (count <= num) {
            if (count < 3) {
                output.push(count - 1);
            } else {
                output.push(output[count - 2] + output[count - 3]);
            }
            count++;
        }
        return output;
    }

}
