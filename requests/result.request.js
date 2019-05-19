module.exports = async function (nums) {
    if(!nums.num1 || !nums.num2){
        throw new Error("Неверный ввод");
    }

    let num1 = parseInt(nums.num1),
        num2 = parseInt(nums.num2);

    function sum(num) {
        let result = 0;

        while(num > 0) {
            result += num % 10;
            num = Math.floor(num / 10);
        }
        return result;
    }

    let maxAttitude = 0;

    for(let i = num1; i <= num2; i++) {
        if (maxAttitude < i / sum(i)) maxAttitude = i / sum(i);
    }
    
    return maxAttitude;
};