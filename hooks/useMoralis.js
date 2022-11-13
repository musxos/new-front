import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Web3UserContext } from "../context";

export const useMoralis = (chainId) => {
  const {
    contextState: { account },
  } = Web3UserContext();

  const hasRun = useRef(false);

  const [{ isLoading, success, failure, error, response }, setState] = useState(
    {
      isLoading: false,
      success: false,
      failure: false,
      error: null,
      response: {
        cursor: null,
        page: null,
        page_size: null,
        result: [],
        total: null,
      },
    }
  );

  const fetchNFTs = async (options) => {
    const { data } = await axios.request(options);

    return data;
  };

  useEffect(() => {
    account &&
      chainId &&
      (async () => {
        if (hasRun.current) return;

        hasRun.current = true;

        const options = {
          method: "GET",
          url: `https://deep-index.moralis.io/api/v2/${account}/nft`,
          params: { chain: chainId, format: "decimal", limit: "12" },
          headers: {
            accept: "application/json",
            "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY,
          },
        };

        setState((p) => ({ ...p, isLoading: true }));

        try {
          const data = await fetchNFTs(options);

          setState((p) => ({
            ...p,
            isLoading: false,
            success: true,
            response: data,
          }));
        } catch (err) {
          setState((p) => ({
            ...p,
            isLoading: false,
            failure: true,
            error: err,
          }));
        }
      })();
  }, [account, chainId]);

  const onCursor = async (cursor) => {
    const options = {
      method: "GET",
      url: `https://deep-index.moralis.io/api/v2/${account}/nft`,
      params: { chain: chainId, format: "decimal", limit: "12", cursor },
      headers: {
        accept: "application/json",
        "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY,
      },
    };
    setState((p) => ({ ...p, isLoading: true }));

    try {
      const data = await fetchNFTs(options);

      setState((prev) => {
        const { response: _response } = prev;

        const payload = {
          ..._response,
          ...data,
          result: [..._response.result, ...data.result],
        };

        return {
          ...prev,
          isLoading: false,
          success: true,

          response: payload,
        };
      });
    } catch (err) {
      setState((p) => ({
        ...p,
        isLoading: false,
        failure: true,
        error: err,
      }));
    }
  };

  return { isLoading, success, failure, error, response, onCursor };
};
