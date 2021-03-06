import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe("๐ random ํ์คํธ ์ผ์ด์ค", () => {
    test("Random์ pickUniqueNumbersInRange ๋ฉ์๋๋ฅผ ์ฌ์ฉํ์ฌ ๋๋ค๊ฐ์ ์์ฑํด์ผํฉ๋๋ค.", () => {
        const random = global.MissionUtils.Random.pickUniqueNumbersInRange;
        render(<App/>);
        expect(random).toHaveBeenCalledTimes(1);
    });
});

describe("โ input ํ์คํธ ์ผ์ด์ค", () => {
    test("input์ ์๋ ฅ๊ฐ์ ๋ง๊ฒ ์๋ ฅ๊ฐ์ด ๋ณํด์ผํฉ๋๋ค.", () => {
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        fireEvent.change($input, { target: { value: "193" } });
        const inputValue = screen.getByDisplayValue("193");
        expect(inputValue.value).toEqual("193");
    });

    test("๋ฌธ์๊ฐ ๋ค์ด์ฌ ๊ฒฝ์ฐ alert ๊ฒฝ๊ณ ์ฐฝ์ผ๋ก ๋ํ๋ด์ผํฉ๋๋ค.", () => {
        const alertMock = jest.spyOn(window, "alert");
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        fireEvent.change($input, { target: { value: "123a" } });
        expect(alertMock).toHaveBeenCalledTimes(1);
    });

    test("์ค๋ณต๋ ์ซ์๊ฐ ๋ค์ด์ฌ ๊ฒฝ์ฐ alert ๊ฒฝ๊ณ ์ฐฝ์ผ๋ก ๋ํ๋ด์ผํฉ๋๋ค.", () => {
        const alertMock = jest.spyOn(window, "alert");
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        fireEvent.change($input, { target: { value: "122" } });
        expect(alertMock).toHaveBeenCalledTimes(1);
    });

    test("4์๋ฆฌ์ด์ ์ซ์๊ฐ ๋ค์ด์ฌ ๊ฒฝ์ฐ alert ๊ฒฝ๊ณ ์ฐฝ์ผ๋ก ๋ํ๋ด์ผํฉ๋๋ค.", () => {
        const alertMock = jest.spyOn(window, "alert");
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        fireEvent.change($input, { target: { value: "1234" } });
        expect(alertMock).toHaveBeenCalledTimes(1);
    });
});

describe("โพ๏ธ ์๊ตฌ ๊ฒ์ ํ์คํธ ์ผ์ด์ค", () => {
    test("๋ณผ์ด 0์ด๊ณ  ์คํธ๋ผ์ดํฌ๊ฐ 0์ด๋ฉด ํ๋ฉด์ ๋ซ์ฑ์ด ์ถ๋ ฅ๋์ผ ํฉ๋๋ค.", () => {
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        const $button = container.querySelector("button");
        const $result = container.querySelector("#result");
        fireEvent.change($input, { target: { value: "456" } });
        fireEvent.click($button);
        expect($result.textContent).toEqual("๋ซ์ฑ");
    });

    test("๋ณผ์ด 0์ด๊ณ  ์คํธ๋ผ์ดํฌ๊ฐ 1์ด๋ฉด ํ๋ฉด์ 1์คํธ๋ผ์ดํฌ๊ฐ ์ถ๋ ฅ๋์ผ ํฉ๋๋ค.", () => {
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        const $button = container.querySelector("button");
        const $result = container.querySelector("#result");
        fireEvent.change($input, { target: { value: "429" } });
        fireEvent.click($button);
        expect($result.textContent).toEqual("1์คํธ๋ผ์ดํฌ");
    });

    test("๋ณผ์ด 1์ด๊ณ  ์คํธ๋ผ์ดํฌ๊ฐ 0์ด๋ฉด ํ๋ฉด์ 1๋ณผ์ด ์ถ๋ ฅ๋์ผ ํฉ๋๋ค.", () => {
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        const $button = container.querySelector("button");
        const $result = container.querySelector("#result");
        fireEvent.change($input, { target: { value: "981" } });
        fireEvent.click($button);
        expect($result.textContent).toEqual("1๋ณผ");
    });

    test("๋ณผ์ด 0์ด๊ณ  ์คํธ๋ผ์ดํฌ๊ฐ 3์ด๋ฉด ํ๋ฉด์ ์น๋ฆฌ๊ฐ ์ถ๋ ฅ๋์ผ ํฉ๋๋ค.", () => {
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        const $button = container.querySelector("button");
        const $result = container.querySelector("#result");
        fireEvent.change($input, { target: { value: "123" } });
        fireEvent.click($button);
        expect($result.textContent).toEqual("์น๋ฆฌ");
    });

    test("๋ณผ์ด 2์ด๊ณ  ์คํธ๋ผ์ดํฌ๊ฐ 1์ด๋ฉด ํ๋ฉด์ 2๋ณผ 1์คํธ๋ผ์ดํฌ๊ฐ ์ถ๋ ฅ๋์ผ ํฉ๋๋ค.", () => {
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        const $button = container.querySelector("button");
        const $result = container.querySelector("#result");
        fireEvent.change($input, { target: { value: "321" } });
        fireEvent.click($button);
        expect($result.textContent).toEqual("2๋ณผ 1์คํธ๋ผ์ดํฌ");
    });
});

describe("๐ ์น๋ฆฌ ํ์คํธ ์ผ์ด์ค", () => {
    const { reload } = window.location;

    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { reload: jest.fn() },
        });
    });

    afterAll(() => {
        window.location.reload = reload;
    });

    test("์น๋ฆฌ์ ์ฌ์์ ๋ฒํผ์ด ๋ํ๋์ผ ํฉ๋๋ค.", () => {
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        const $button = container.querySelector("button");
        const $result = container.querySelector("#result");
        fireEvent.change($input, { target: { value: "123" } });
        fireEvent.click($button);
        expect($result.textContent).toEqual("์น๋ฆฌ");
        const $resetbutton = screen.getByText("์ฌ์์");
        expect($resetbutton).toBeInTheDocument();
    });

    test("์ฌ์์ ๋ฒํผ์ ๋๋ ์ ๊ฒฝ์ฐ window.confirm ์ฐฝ์ ๋ํ๋ด์ผํฉ๋๋ค.", () => {
        const confirmMock = jest.spyOn(window, "confirm");
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        const $button = container.querySelector("button");
        const $result = container.querySelector("#result");
        fireEvent.change($input, { target: { value: "123" } });
        fireEvent.click($button);
        expect($result.textContent).toEqual("์น๋ฆฌ");
        const $resetbutton = screen.getByText("์ฌ์์");
        fireEvent.click($resetbutton);
        expect(confirmMock).toHaveBeenCalledTimes(1);
    });

    test("์ฌ์์ ๋ฒํผ์ ๋๋ ์ ๊ฒฝ์ฐ confirm์ ํ์ธ์ ๋๋ฌ์ผ ์๋ก๊ณ ์นจ์ด ๋์ด์ผ ํฉ๋๋ค. (๐ window.location.reload ์ฌ์ฉ)", () => {
        jest.spyOn(window, "confirm")
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true);
        const reloadMock = jest.spyOn(window.location, "reload");
        const { container } = render(<App />);
        const $input = container.querySelector("input");
        const $button = container.querySelector("button");
        const $result = container.querySelector("#result");
        fireEvent.change($input, { target: { value: "123" } });
        fireEvent.click($button);
        expect($result.textContent).toEqual("์น๋ฆฌ");
        const $resetbutton = screen.getByText("์ฌ์์");
        fireEvent.click($resetbutton);
        expect(reloadMock).toHaveBeenCalledTimes(0);
        fireEvent.click($resetbutton);
        expect(reloadMock).toHaveBeenCalledTimes(1);
    });
});