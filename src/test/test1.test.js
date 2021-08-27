const isPalindrome = require("../test1").isPalindrome;

test("the function returns false if the expression is not palindrome", () => {
    const expression = "A nut for a jar of tona."
    expect(isPalindrome(expression)).toBeFalsy();
    expect(isPalindrome(expression)).toBe(false);
}); 

test("the function returns true if the expression is palindrome", () => {
    const expression = "Al lets Della call Ed “Stella.”"
    expect(isPalindrome(expression)).toBeTruthy();
    expect(isPalindrome(expression)).toBe(true);
}); 