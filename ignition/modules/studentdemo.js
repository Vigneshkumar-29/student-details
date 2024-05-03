const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("StudentDetails", (m) => {
  const Studentdemo = m.contract("StudentDetails");
  

 

  return (Studentdemo);
});
