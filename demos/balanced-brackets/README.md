# Balanced Brackets

A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

## The Solution 

### using imperative way (only for discussion, not implemented)

If you are using an imperative method, this problem can be solved using a Stack Data Structure.

The basic idea in imperative method is to scan through the input string of braces and keep pushing all the opening braces into the stack. Once a closing brace is found, pop a brace from the stack and if these two do not match, the input is unbalanced else continue to push and pop until the input string is fully scanned and if the stack is empty at the end, the input is balanced otherwise it is unbalanced. 

### using declarative way

The declarative approach requires us to describe the properties of the domain and the end state. 

The properties are:

1. The input is a string of variable length and only allows `{`, `[`, `(`, `}`, `]` and `)`
2. If the input length is odd, it is unbalanced (it is just not possible to have balanced brackets with odd number of characters)
3. If the input length is even, then for every opening brace of type `(`, `{` or `]` there is an equivalent closing brace at a distance double the length of other opening braces after the current opening brace

### The Implementation

We are using [Ramda](http://ramdajs.com/) as the helper library and our custom Functor `Maybe` which will help in handling null or empty values as well as allow us to use `map` as we use it for JavaScript Arrays. 

Implementing properties 1 and 2 is relatively straighforward. 

For property 3, we define a recursive function `removeAdjacentBrackets` which will use a regular expression to strip away all the opening and closing braces that are right next to each other. For example, in `{([])}`, the braces `[` and `]` are right next to each other and applying our function `removeAdjacentBrackets` to this input once will result in `{()}` since it will strip away `[]`. 

If, at the end, the input is non-empty, then it is clearly unbalanced. It is balanced otherwise. 

