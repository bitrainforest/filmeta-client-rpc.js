// Code generated by github.com/BitRainforest/filmeta-gen from github.com/BitRainforest/bony/lens DO NOT EDIT.
export declare type Cid = { "/": string };
export declare type BlockHeader = {
  Cid: Cid;
  Height: number;
  Miner: string;
  Parents: Array<Cid>;
  ParentWeight: string;
  ParentBaseFee: string;
  ParentStateRoot: Cid;
  ParentMessageReceipts: Cid;
  Messages: Cid;
  MessagesCount: number;
  BlsCids: Array<Cid>;
  SecpkCids: Array<Cid>;
  Ticket: string;
  ElectionProof: string;
  WinCount: number;
  ForkSignaling: number;
  BlockSig: string;
  BLSAggregate: string;
  BeaconEntries: Array<string>;
  WinPoStProof: Array<string>;
  Size: number;
  Timestamp: number;
};
export declare type BlockMessages = {
  Cid: Cid;
  Miner: string;
  Height: number;
  BlsCids: Array<Cid>;
  SecpkCids: Array<Cid>;
};
export declare type ListReturn = { Total: number; Data: any };
export declare type Reward = {
  Cid: Cid;
  Height: number;
  Miner: string;
  Penalty: string;
  GasReward: string;
  MineReward: string;
  WinCount: number;
};
export declare type Message = {
  Cid: Cid;
  Version: number;
  Nonce: number;
  Height: number;
  StateRoot: Cid;
  From: string;
  To: string;
  Value: string;
  Method: number;
  ActorName: string;
  ActorFamily: string;
  ExitCode: number;
  GasUsed: number;
  Params: string;
  GasLimit: number;
  GasFeeCap: string;
  GasPremium: string;
  ParentBaseFee: string;
  BaseFeeBurn: string;
  OverEstimationBurn: string;
  MinerPenalty: string;
  MinerTip: string;
  Refund: string;
  GasRefund: number;
  GasBurned: number;
  SizeBytes: number;
};

export declare class LotusRPC {
  constructor(provider: any, options: { schema: any });
  authBonyVerify(str: string): Promise<Array<string>>;
  blockHeaderByCid(cid: Cid): Promise<BlockHeader>;
  blockMessageCidsByCid(cid: Cid): Promise<BlockMessages>;
  blockMessagesByCid(cid: Cid, int: number, int1: number): Promise<ListReturn>;
  blockRewardByCid(cid: Cid): Promise<Reward>;
  internalMessageBySourceMessage(
    cid: Cid,
    int: number,
    int1: number,
  ): Promise<ListReturn>;
  messageByCid(cid: Cid): Promise<Message>;
  minerBurnAmount(
    address: string,
    chainEpoch: number,
    chainEpoch1: number,
  ): Promise<string>;
  minerSectorEventCount(
    address: string,
    int: number,
    chainEpoch: number,
    chainEpoch1: number,
  ): Promise<number>;
  importFile(
    body:
      | Blob
      | BufferSource
      | FormData
      | URLSearchParams
      | string
      | ReadableStream,
  ): string;
  destroy(code?: number): void;
}
