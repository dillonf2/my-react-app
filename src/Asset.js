

function Asset({ assetList, setAssetList }) {
  const handleAssetClick = async (asset) => {
    const updatedAsset = {
      ...asset,
      votes: asset.votes + 1,
    };

    await fetch(`http://localhost:3000/crypto/${asset.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAsset),
    });

    setAssetList(assetList.map((asset) => (asset.id === updatedAsset.id ? updatedAsset : asset)));
    alert('Your vote has been tallied! Thanks for participating!');
  };

  const assets = assetList.map((asset) => (
    <li key={asset.id} className="asset-item" onClick={() => handleAssetClick(asset)}>
      {asset.name}
      <ul>Votes: {asset.votes}</ul>
    </li>
  ));

  return (
    <div className="asset-container">
      <h1>Assets</h1>
      <ul>{assets}</ul>
    </div>
  );
}

export default Asset;
  
  
  
  
  
  