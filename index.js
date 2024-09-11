const norm = (content) => {
    const [, ...data] = content.trim().split('\n');
    return data;
};

const getStat = (str) => str.split(';').at(4);

const svitch = (data) => {
    const stati = data.map((c) => getStat(c));
    return stati.sort();
}

const showInfo = (content) => {
    // task1
    const data = norm(content);
    console.log(`Count: ${data.length}`);

    const sortedList = svitch(data);
    console.log(`Stat: ${sortedList.join(', ')}`);
};
export default showInfo;