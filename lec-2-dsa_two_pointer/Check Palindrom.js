let str = 'A man, a plan, a canal: Panama';

const isPalindrome = (str) => {
    let i = 0
    let j = str.length - 1

    while (i < j) {

        if (str[i] == str[j])
            return true;

        i++;
        j--;
    }

    return false;
}

console.log(isPalindrome(str));