
export interface IRequestorInfo {
    RequestorEmail: string;
    Email: string;
    Alias: string;
    FirstName: string;
    LastName: string;
    OU: EOU;
    Role: ERole;
    Segment: ESegment;
    Objective: EObjective;
    BusinessImpact: EBusinessImpact;
    Industry: EIndustry;
    SubRole: EMarketerSubRole | ESellerSubRole;
}

export type CustomerOfferSelectedType = ICustomerOffer & IContentPersonalizationOffer & (IXKitOffer | IEaaSOffer)
    & IPartnerOffer & IConsumptionOffer;

export interface IRequestCommon {
    AdditionalComments: string;
    CRMAccountId: string;
    RequestorIO: string;
    SelectedServiceType: IServiceType;
    Service: IService;
    AccountName: string;
    BulkUpload: string; // TODO: Switch over to better model like TPID: string[];
    IOApprover: string;
    CompanyName: string;
    TargetRoles: string;
    AudienceSize: string;
    CustomerOfferSelected: CustomerOfferSelectedType;
    StartDate: Date;
    EndDate: Date;
    Attachments: FileList;
    QuantityRequested: string;
    LocationType: ELocationType;
    DistributionMethod: string;
    AssetFormat: string;
    AssetUse: string;
    SecurityType: string;
    BrandingRequirement: string;

    //SP Info
    'odata.type': string;
}

interface IRequestAccountIntelligenceSpecific {
    RolesForLeadAquisition: string;
    TitlesForLeadAquisition: string;
    NumberOfAccounts: ENumberOfAccounts;
    TotalQSOsRequested: number;
    TargetQSOList: ETargetQSO;
    NewOrExistingAccount: ETechTargetAccount;
    AddOrReplaceAccounts: EAddOrReplaceAccounts;
    Domain: string;
    TitlesForProfiling: string;
    NamesOfBDMs: string;
    ContactEnrichmentText: string;
    AIToolType: string;
    DatabookValueArchitectService: IDatabookValueArchitectService;
    QSOLeadLanding: EQSOLeadLanding;
    StartDate: Date;
    EndDate: Date;
    AliasesToInclude: string;
}

interface IRequestCustomerEngagementSpecific {
    ABEPermission: EYesNo;
    CustomerCompanyName: string;
    CustomerFirstName: string;
    CustomerLastName: string;
    CustomerEmailAddress: string;
    DeliveryAddress1: string;
    DeliveryAddress2: string;
    DeliveryCity: string;
    DeliveryEmail: string;
    DeliveryFirst: string;
    DeliveryLast: string;
    DeliveryPhoneNumber: string;
    DeliveryState: EState;
    DeliveryZip: string;
    ImmersionTopic: EImmersionTopic;
    LocationType: ELocationType;
    PreferredMonth: EMonth;
    QuantityRequested: string;
    SpecialDeliveryInstructions: string;
    TypeOfAddress: string;

    CustomerOfferKitType: ECustomerOfferKitType;
    AddressRequired: boolean;
    NotesToCustomer: string;
    VideoGreeting: EVideoGreeting;

    //Content Personalization
    VideoCustomizationVideo: string;
    VideoCustomizationCustomization: string;
    CompanySize: string;
    AudienceSize: string;
    AssetType: string;
    ContentPersonalizationService: string;

    //Consumption Fields
    CampaignName: string;
    CampaignOverview: string;
    GEPMarketingPlay: string;
    RequestorBudget: string;
    DatabookInsights: boolean;

    PrintedCTAInsert: string;
    SolutionArea: string;
}

interface IRequestEventsAsAServiceSpecific {
    Title: string
    EventOwnerEmail: string,
    EventOwnerFirst: string,
    EventOwnerLast: string,
    EventOwnerPhone: string,
    IONumber: string,
    EventName: string,
    EstimatedAttendance: string,
    EventType: string,
    EventDescription: string,
    StartTime: string,
    EndTime: string,
    SetupDate: Date,
    SetupTime: string,
    PickupDate: Date,
    PickupTime: string,
    NotesToServiceDesk: string,
    SelectedKits: string[],
    CustomerOrganizationInformation: string,
    Location: string, 
    Address1: string,
    Address2: string,
    Address3: string,
    City: string,
    State: string,
    ZipCode: string,
    OnsiteFirst: string,
    OnsiteLast: string,
    OnsiteEmail: string,
    OnsitePhone: string,
    ShipToCustomerOrganization: string,
    ShipToLocation: string, 
    ShipToAddress1: string,
    ShipToAddress2: string,
    ShipToAddress3: string,
    ShipToCity: string,
    ShipToState: string,
    ShipToZip: string,
    ContactFirst: string,
    ContactLast: string,
    ContactEmail: string,
    ContactPhone: string,
    PickupAddress1: string,
    PickupAddress2: string,
    PickupAddress3: string,
    PickupCity: string,
    PickupState: string,
    PickupZip: string,
    PickupFirst: string,
    PickupLast: string,
    PickupEmail: string,
    PickupPhone: string,
    EventOrVMailRecord: string,
    KitSolutionArea: string,
    TriagedStatus: string,
    Active_x002f_Inactive: string,
    ShipStartTime: string,
    ShipEndTime: string,
    DeliveryStartTime: string,
    DeliveryEndTime: string
    AdvanceWarehouseStartDate: Date,
    AdvanceWarehouseStartTime: string,
    AdvanceWarehouseEndDate: Date,
    AdvanceWarehouseEndTime: string,
    ShippingType: string,
    Addon: IXKitOffer[] | IEaaSOffer[];
    ProductAlignment: string,
    FTEOwnerAlias: string,
}

export type IRequestAccountIntelligence = IRequestorInfo & IRequestCommon & IRequestAccountIntelligenceSpecific;
export type IRequestCustomerEngagement = IRequestorInfo & IRequestCommon & IRequestCustomerEngagementSpecific;
export type IRequestEventsAsAService = IRequestorInfo & IRequestCommon & IRequestEventsAsAServiceSpecific;

export type IRequest = IRequestCommon
    & IRequestorInfo
    & IRequestAccountIntelligenceSpecific
    & IRequestCustomerEngagementSpecific
    & IRequestEventsAsAService

export class Request implements IRequest {

    // IRequestorInfo - Requestor info 
    public RequestorEmail: string;
    public Email: string;
    public Alias: string;
    public FirstName: string;
    public LastName: string;
    public OU: EOU;
    public Role: ERole;
    public Segment: ESegment;
    public Objective: EObjective;
    public BusinessImpact: EBusinessImpact;
    public Industry: EIndustry;
    public SubRole: EMarketerSubRole | ESellerSubRole;

    // IRequestCommon - Common to all requests
    public AdditionalComments: string;
    public CRMAccountId: string;
    public RequestorIO: string;
    public SelectedServiceType: IServiceType;
    public Service: IService;

    public AccountName: string;
    public BulkUpload: string;
    public IOApprover: string;
    public RequestStatus: string;
    public CompanyName: string;
    public CustomerOfferSelected: ICustomerOffer & IContentPersonalizationOffer & (IXKitOffer | IEaaSOffer) & IPartnerOffer & IConsumptionOffer;

    // Customer Engagement + Consumption
    public CustomerEmailAddress: string;
    public CustomerFirstName: string;
    public CustomerLastName: string;

    // Account Intelligence
    public RolesForLeadAquisition: string;
    public TitlesForLeadAquisition: string;
    public NumberOfAccounts: ENumberOfAccounts;
    public TotalQSOsRequested: number;
    public TargetQSOList: ETargetQSO;
    public NewOrExistingAccount: ETechTargetAccount;
    public AddOrReplaceAccounts: EAddOrReplaceAccounts;
    public Domain: string;
    public TitlesForProfiling: string;
    public NamesOfBDMs: string;
    public ContactEnrichmentText: string;
    public AIToolType: string;
    public DatabookValueArchitectService: IDatabookValueArchitectService;
    public QSOLeadLanding: EQSOLeadLanding;
    public StartDate: Date;
    public EndDate: Date;
    public AliasesToInclude: string;

    // Customer Engagement
    public ABEPermission: EYesNo;
    public CustomerCompanyName: string;
    public DeliveryAddress1: string;
    public DeliveryAddress2: string;
    public DeliveryCity: string;
    public DeliveryEmail: string;
    public DeliveryFirst: string;
    public DeliveryLast: string;
    public DeliveryPhoneNumber: string;
    public DeliveryState: EState;
    public DeliveryZip: string;
    public ImmersionTopic: EImmersionTopic;
    public LocationType: ELocationType;
    public PreferredMonth: EMonth;
    public QuantityRequested: string;
    public SpecialDeliveryInstructions: string;
    public TargetRoles: string;
    public TypeOfAddress: string;

    public CustomerOfferKitType: ECustomerOfferKitType;
    public AddressRequired: boolean;
    public NotesToCustomer: string;
    public VideoGreeting: EVideoGreeting;

    // Consumption
    public CampaignName: string;
    public CampaignOverview: string;
    public GEPMarketingPlay: string;
    public RequestorBudget: string;

    public ConsumptionKitSelected: string;
    public ConsumptionServiceType: string;

    public SolutionArea: string;
    public PrintedCTAInsert: string;
    public DatabookInsights: boolean;
    //Content Personalization
    public DistributionMethod: string;
    public AssetFormat: string;
    public AssetUse: string;
    public SecurityType: string;
    public BrandingRequirement: string;
    public VideoCustomizationVideo: string;
    public VideoCustomizationCustomization: string;
    public CompanySize: string;
    public AudienceSize: string;
    public AssetType: string;
    public ContentPersonalizationService: string;
    public Attachments: FileList;
 
    //XKit
    public Title: string
    public EventOwnerEmail: string
    public EventOwnerFirst: string
    public EventOwnerLast: string
    public EventOwnerPhone: string
    public IONumber: string
    public EventName: string
    public EstimatedAttendance: string
    public EventType: string
    public EventDescription: string
    public StartTime: string
    public EndTime: string
    public SetupDate: Date
    public SetupTime: string
    public PickupDate: Date
    public PickupTime: string
    public NotesToServiceDesk: string
    public SelectedKits: string[]
    public CustomerOrganizationInformation: string
    public Location: string
    public Address1: string
    public Address2: string
    public Address3: string
    public City: string
    public State: string
    public ZipCode: string
    public OnsiteFirst: string
    public OnsiteLast: string
    public OnsiteEmail: string
    public OnsitePhone: string
    public ShipToCustomerOrganization: string
    public ShipToLocation: string
    public ShipToAddress1: string
    public ShipToAddress2: string
    public ShipToAddress3: string
    public ShipToCity: string
    public ShipToState: string
    public ShipToZip: string
    public ContactFirst: string
    public ContactLast: string
    public ContactEmail: string
    public ContactPhone: string
    public PickupAddress1: string
    public PickupAddress2: string
    public PickupAddress3: string
    public PickupCity: string
    public PickupState: string
    public PickupZip: string
    public PickupFirst: string
    public PickupLast: string
    public PickupEmail: string
    public PickupPhone: string
    public EventOrVMailRecord: string
    public KitSolutionArea: string
    public TriagedStatus: string
    public Active_x002f_Inactive: string
    public ShipStartTime: string
    public ShipEndTime: string
    public DeliveryStartTime: string
    public DeliveryEndTime: string
    public AdvanceWarehouseStartDate: Date;
    public AdvanceWarehouseStartTime: string;
    public AdvanceWarehouseEndDate: Date;
    public AdvanceWarehouseEndTime: string;
    public ShippingType: string;
    public Addon: IXKitOffer[] | IEaaSOffer[];

    //EaaS
    public ProductAlignment: string;
    public FTEOwnerAlias: string;

    public constructor (data?: IRequest) {
        if (data) {
            Object.assign(this, data);
        }
    }

    
export interface ISharepointRequest extends Partial<Modify<Request, {
    Service: string;
    SelectedServiceType: string;
    DatabookValueArchitectService: string;
    CustomerOfferSelected: string;
}>> {};

export enum EListAcronym {
    MaaS = 'MaaS',
    EaaS = 'EaaS',
    XKit = 'XKit',
}

export const USMaaSRequestListName: string = 'MaaS Requests';
export const XKitRequestListName: string = 'XKit Requests';
export const EaaSRequestListName: string = 'EaaS Requests';

