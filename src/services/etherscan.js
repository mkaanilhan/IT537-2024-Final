import axios from 'axios';

const API_KEY = '6X2Q3RM7BNUXE6E3EBB6VZJWFZ2PSCNSMX';

export const getBalance = (address) => {
    return axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&apikey=${API_KEY}`);
};

export const getTransactions = (address, page = 1, offset = 10) => {
    return axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&page=${page}&offset=${offset}&sort=desc&apikey=${API_KEY}`);
};

export const getTransactionDetails = async (txHash) => {
    const response = await axios.get(
        `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${API_KEY}`
    );
    return response.data.result;
};
