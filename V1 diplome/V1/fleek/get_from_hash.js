const fleek = require('@fleekhq/fleek-storage-js');   

const hash = "bafybeifikvfeuzugzbuoi4c2a5otqnsdovqk52pc3uzkbze6ttfup5v74y";

 async function testFunctionGet() {
  const input = {
    hash,
  };

  try {
    const result = await fleek.getFileFromHash(input);
    console.log('result', result);
  } catch(e) {
    console.log('error', e);
  }
}

testFunctionGet();

