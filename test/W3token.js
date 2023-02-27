const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Payments", function () {
  let Payments;
  let payments;

  beforeEach(async function () {
    Payments = await ethers.getContractFactory("Payments");
    payments = await Payments.deploy();
    await payments.deployed();
  });

  it("Should return the correct ETH balance after deposit", async function () {
    await payments.deposit({ value: ethers.utils.parseEther("1") });
    const balance = await ethers.provider.getBalance(payments.address);
    expect(balance).to.equal(ethers.utils.parseEther("1"));
  });

  it("Should transfer ETH from sender to recipient", async function () {
    const [owner, recipient] = await ethers.getSigners();
    await payments.connect(owner).deposit({ value: ethers.utils.parseEther("1") });
    const initialBalance = await ethers.provider.getBalance(recipient.address);
    await payments.connect(owner).transfer(recipient.address, ethers.utils.parseEther("0.5"));
    const finalBalance = await ethers.provider.getBalance(recipient.address);
    expect(finalBalance.sub(initialBalance)).to.equal(ethers.utils.parseEther("0.5"));
  });

});
