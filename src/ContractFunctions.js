export async function _Bid(
  _bidAmount,
  _noOfBids,
  _userAddress,
  _web3,
  _contractInstance
) {
  try {
    const ether = _bidAmount * _noOfBids;
    const bidAmount = _web3.utils.toWei(ether.toString(), "ether");
    await _contractInstance.methods.Bid(_noOfBids).send({
      from: _userAddress,
      value: bidAmount,
      gas: 90000,
    });
  } catch (error) {
    console.error("Error bidding:", error);
  }
}
