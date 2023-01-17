import HelloWorld from "../utils/HelloWorld";

it ("Should show Hello World", () => {
    let helloWorld = HelloWorld();

    expect(helloWorld).toBe("Hello World")
})