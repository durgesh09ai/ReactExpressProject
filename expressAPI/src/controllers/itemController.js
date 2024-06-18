let items = [
    { id: 1, name: 'Durgesh kumar', email: 'durgesh@gmail',designition:'Manager',address:'Noida sector 16 B, Greater Noida west, UP',contact:'9898765698',grade:'A' },
    { id: 2, name: 'Ashok Singh', email: 'ashok@hotmail.com' ,designition:'ASt Manager',address:'Noida sector 1 B, Greater Noida west, UP',contact:'6756439876',grade:'B'},
    { id: 3, name: 'Seema Alhahot', email: 'seema@gmail.com' ,designition:'Master Ji',address:'Delhi, Delhi west, Delgi',contact:'9898978789',grade:'C'},
    { id: 4, name: 'Vikash Singh', email: 'vikash@gmail.com' ,designition:'Sr Manager ',address:'Gurgaon, Haryana',contact:'9898978789',grade:'AA'},
    { id: 5, name: 'Manoj singh TIwari', email: 'manoj@gmail.com' ,designition:'Master Ji',address:'Delhi, Delhi west, Delgi',contact:'9898978789',grade:'BB'}
];

exports.getAllItems = (req, res) => {
    res.json(items);
};

exports.getItemById = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
};

