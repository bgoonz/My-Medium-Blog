#!/usr/local/bin/mocha
import {expect} from "chai";
import color from "./color.js";

describe("color", () => {
  it("hsl", () => {
    let r = 11;
    let g = 48;
    let b = 192;
    let hsl = color.rgbToHsl(r, g, b);
    let rgb = color.hslToRgb(hsl[0], hsl[1], hsl[2]);
    expect(rgb).to.equal([r, g, b]);
  });

  it("hsv", () => {
    let r = 11;
    let g = 48;
    let b = 192;
    let hsv = color.rgbToHsv(r, g, b);
    let rgb = color.hsvToRgb(hsv[0], hsv[1], hsv[2]);
    expect(rgb).to.equal([r, g, b]);
  });
});
