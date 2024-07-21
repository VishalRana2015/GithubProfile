export abstract class Achievement {
  protected _icon!: string;
  protected _title!: string;
  protected _issuedOn!: string;
  protected _issuedBy!: string;
  protected _description!: string;
}

export class CredlyBadge {
  protected _dataShareBadgeId!: string;
  protected _dataShareBadgeHost?: string;

  get dataShareBadgeId(): string {
    return this._dataShareBadgeId;
  }

  get dataShareBadgeHost(): string | undefined {
    return this._dataShareBadgeHost;
  }
}

export class Link {
  protected _url!: string;
  protected _text!: string;

  get url(): string {
    return this._url;
  }

  get text(): string {
    return this._text;
  }
}

export class Award extends Achievement {
  protected _highlights!: string[];
  protected _links!: Link[];
}

export class Certification extends Achievement {
  protected _credlyBadge?: CredlyBadge;
  protected _links?: Link[]; // todo: make it optional
}
