/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    YourContract: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC721IncorrectOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ERC721InsufficientApproval",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "approver",
              type: "address",
            },
          ],
          name: "ERC721InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "ERC721InvalidOperator",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC721InvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
          ],
          name: "ERC721InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ERC721InvalidSender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ERC721NonexistentToken",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "_fromTokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "_toTokenId",
              type: "uint256",
            },
          ],
          name: "BatchMetadataUpdate",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "MetadataUpdate",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "bounties",
          outputs: [
            {
              internalType: "string",
              name: "title",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "totalRequiredAmount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sponsorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "communityId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sponsoredAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "numberOfSponsoringCommunities",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "bountyCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "communities",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "string",
              name: "instagramHandle",
              type: "string",
            },
            {
              internalType: "string",
              name: "linkedinHandle",
              type: "string",
            },
            {
              internalType: "string",
              name: "twitterHandle",
              type: "string",
            },
            {
              internalType: "address",
              name: "creatorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "followerCount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "communityCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          name: "communityNameToId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_title",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_totalRequiredAmount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_communityName",
              type: "string",
            },
          ],
          name: "createBounty",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "eventCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "events",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "capacity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "availableSeats",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "ticketPrice",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "creatorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "creatorCommunityId",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_communityId",
              type: "uint256",
            },
          ],
          name: "followCommunity",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
          ],
          name: "generateNFT",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_bountyId",
              type: "uint256",
            },
          ],
          name: "getBountyDetails",
          outputs: [
            {
              internalType: "string",
              name: "title",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "totalRequiredAmount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sponsorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "communityId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sponsoredAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "numberOfSponsoringCommunities",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_communityId",
              type: "uint256",
            },
          ],
          name: "getCommunityDetails",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "string",
              name: "instagramHandle",
              type: "string",
            },
            {
              internalType: "string",
              name: "linkedinHandle",
              type: "string",
            },
            {
              internalType: "string",
              name: "twitterHandle",
              type: "string",
            },
            {
              internalType: "address",
              name: "creatorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "followerCount",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "eventIds",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_eventId",
              type: "uint256",
            },
          ],
          name: "getEventDetails",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "capacity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "availableSeats",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "ticketPrice",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "creatorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "creatorCommunityId",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "bountyIds",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_bountyId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "payBounty",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
            {
              internalType: "string",
              name: "_instagramHandle",
              type: "string",
            },
            {
              internalType: "string",
              name: "_linkedinHandle",
              type: "string",
            },
            {
              internalType: "string",
              name: "_twitterHandle",
              type: "string",
            },
          ],
          name: "registerCommunity",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
            {
              internalType: "string",
              name: "_startTime",
              type: "string",
            },
            {
              internalType: "string",
              name: "_endTime",
              type: "string",
            },
            {
              internalType: "string",
              name: "_location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_capacity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_ticketPrice",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_creatorCommunityName",
              type: "string",
            },
          ],
          name: "registerEvent",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "users",
          outputs: [
            {
              internalType: "address",
              name: "userAddress",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        approve:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        balanceOf:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        getApproved:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        isApprovedForAll:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        name: "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        ownerOf:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        safeTransferFrom:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        setApprovalForAll:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        supportsInterface:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        symbol:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        tokenURI:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        transferFrom:
          "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
