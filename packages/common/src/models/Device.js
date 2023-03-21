export default class Device {
  constructor(props) {
    this.avatarUrl = props.avatar_url || undefined;
    this.connected = props.connected || false;
    this.description = props.description || undefined;
    this.disconnectUrl = props.disconnect_url || undefined;
    this.history = props.identifier.history || false;
    this.identifierName = props.identifier.name || undefined;
    this.identifierSearchName = props.identifier.search_name || undefined;
    this.identifierSearchValue = props.identifier.search_value || undefined;
    this.identifierSearchService = props.identifier.search_service || undefined;
    this.type = props.identifier.type || undefined;
    this.id = props.identifier.uid;
    this.name = props.name;
    this.providerType = props.provider_type;
    this.slug = props.slug;
    this.url = props.url;
    this.pin = props.identifier.pin || false;
    this.steps = {
      intro: props.steps?.[0] || undefined,
      searching: props.steps?.[1] || undefined,
      found: props.steps?.[2] || undefined,
      notfound: props.steps?.[3] || undefined,
      pairing: props.steps?.[4] || undefined,
      pin: props.steps?.[5] || undefined,
      error: props.steps?.[6] || undefined,
      success: props.steps?.[7] || undefined,
    };
  }
}
