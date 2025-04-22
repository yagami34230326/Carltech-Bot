

const JavaScriptObfuscator = require("javascript-obfuscator");
const {
  adams
} = require("../Ibrahim/adams");
adams({
  'nomCom': "obfuscate",
  'categorie': "General"
}, async (_0x24066a, _0x425e94, _0x300c3e) => {
  const {
    ms: _0x44eeb5,
    arg: _0x1d3b23,
    repondre: _0x8f543f,
    auteurMessage: _0x4c2f89,
    nomAuteurMessage: _0xefc18d,
    msgRepondu: _0x34fd82,
    auteurMsgRepondu: _0xeebdfc
  } = _0x300c3e;
  try {
    let _0x5073eb = _0x1d3b23.join(" ");
    if (!_0x1d3b23[0]) {
      _0x8f543f("After the command, provide a valid JavaScript code for encryption");
      return;
    }
    ;
    const _0x569da8 = JavaScriptObfuscator.obfuscate(_0x5073eb, {
      'compact': true,
      'controlFlowFlattening': true,
      'controlFlowFlatteningThreshold': 0x1,
      'numbersToExpressions': true,
      'simplify': true,
      'stringArrayShuffle': true,
      'splitStrings': true,
      'stringArrayThreshold': 0x1
    });
    await _0x8f543f(_0x569da8.getObfuscatedCode());
  } catch {
    _0x8f543f("Something is wrong, check if your code is logical and has the correct syntax");
  }
});
