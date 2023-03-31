import { EAddOrReplaceAccounts } from "./EAddOrReplaceAccounts";
import { EBusinessImpact } from "./EBusinessImpact";
import { IDatabookValueArchitectService } from "./DatabookValueArchitectServices";
import { EIndustry } from "./EIndustry";
import { ENumberOfAccounts } from "./ENumberOfAccounts";
import { EObjective } from "./EObjective";
import { EOU } from "./EOU";
import { EQSOLeadLanding } from "./EQSOLeadLanding";
import { EMarketerSubRole, ERole, ESellerSubRole } from "./ERole";
import { ESegment } from "./ESegment";
import { addServiceType, EServiceFormNames, findServiceByTitle, IService, IServiceType } from "./Services";
import { ETargetQSO } from "./ETargetQSO";
import { EYesNo } from "./EYesNo";
import { EImmersionTopic } from "./EImmersionTopic";
import { EMonth } from "./EMonth";
import { ECustomerOfferKitType, ICustomerOffer } from "./CustomerOffer";
import { EVideoGreeting } from "./EVideoGreeting";
import { ELocationType } from "./ELocationType";
import { EState } from "./EState";
import { IContentPersonalizationOffer } from "./ContentPersonalizationOffer";
import { IXKitOffer } from "./Xkit";
import { IPartnerOffer } from "./PartnerOffer";
import { IConsumptionOffer } from "./ConsumptionKit";
import { ETechTargetAccount } from "./ETechTarget";
import { IEaaSOffer } from "./EAAS";
import { splitName } from "@utils/strings";
import { alphanumericLimitedSymbolsPattern } from "@utils/patterns";
import { EServiceTypeFormNames } from "./ESelectedServiceType";
import { Modify } from "@utils/type";
import { IOffer } from "@mmr/components/OffersResults";
import recommend from "@utils/recommender";
import { EMCEM } from "./EMCEM";

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
    MCEM: EMCEM;
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
    AmountRequested: number;
    DeliveryDate: Date;
    ContactEnrichmentText: string;
    KitType: string;
    MSXOpportunityId: string;

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
    AddressUnknown: string;

    CustomerOfferKitType: string;
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
    Addon: (IXKitOffer | IEaaSOffer)[];
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
    public MCEM: EMCEM;

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
    public AmountRequested: number;
    public DeliveryDate: Date;
    public ContactEnrichmentText: string;
    public KitType: string;
    public MSXOpportunityId: string;

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
    public AddressUnknown: string;

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

    //SP Info
    public 'odata.type': string;

    public restoreRequestorInfo (requestorInfo: Partial<IRequestorInfo>): void {
        const { RequestorEmail, Email, Alias, Role, SubRole, FirstName, LastName, Segment, OU } = requestorInfo;
        Object.assign(this, { RequestorEmail, Email, Alias, Role, SubRole, FirstName, LastName, Segment, OU });
    }

    public setUserInfo (name: string, email: string): void {
        const { first, last } = splitName(name);
        this.FirstName = first;
        this.LastName = last;

        this.RequestorEmail = email;

        if (email.endsWith('@microsoft.com')) {
            this.Email = email;

            const alias: string = email.replace('@microsoft.com', '');

            if (alias.match(alphanumericLimitedSymbolsPattern)) {
                this.Alias = alias;
            }
        }
    }

    public async reorder (fromSPRequest: ISharepointRequest): Promise<void> {
        const { ABEPermission, AIToolType, AccountName, Active_x002f_Inactive, AddOrReplaceAccounts, AdditionalComments, Address1, Address2, Address3, AddressRequired, AddressUnknown, AdvanceWarehouseEndDate, AdvanceWarehouseEndTime, AdvanceWarehouseStartDate, AdvanceWarehouseStartTime, Alias, AliasesToInclude, AssetFormat, AssetType, AssetUse, Attachments, AudienceSize, BrandingRequirement, BulkUpload, BusinessImpact, CRMAccountId, CampaignName, CampaignOverview, City, CompanyName, CompanySize, ConsumptionKitSelected, ConsumptionServiceType, ContactEmail, ContactEnrichmentText, ContactFirst, ContactLast, ContactPhone, ContentPersonalizationService, CustomerCompanyName, CustomerEmailAddress, CustomerFirstName, CustomerLastName, CustomerOfferKitType, CustomerOfferSelected, CustomerOrganizationInformation, DatabookInsights, DatabookValueArchitectService, DeliveryAddress1, DeliveryAddress2, DeliveryCity, DeliveryEmail, DeliveryEndTime, DeliveryFirst, DeliveryLast, DeliveryPhoneNumber, DeliveryStartTime, DeliveryState, DeliveryZip, DistributionMethod, Domain, Email, EndDate, EndTime, EstimatedAttendance, EventDescription, EventName, EventOrVMailRecord, EventOwnerEmail, EventOwnerFirst, EventOwnerLast, EventOwnerPhone, EventType, FirstName, GEPMarketingPlay, IOApprover, IONumber, ImmersionTopic, Industry, KitSolutionArea, LastName, Location, LocationType, MCEM, MSXOpportunityId, NamesOfBDMs, NewOrExistingAccount, NotesToCustomer, NotesToServiceDesk, NumberOfAccounts, OU, Objective, OnsiteEmail, OnsiteFirst, OnsiteLast, OnsitePhone, PickupAddress1, PickupAddress2, PickupAddress3, PickupCity, PickupDate, PickupEmail, PickupFirst, PickupLast, PickupPhone, PickupState, PickupTime, PickupZip, PreferredMonth, PrintedCTAInsert, ProductAlignment, QSOLeadLanding, QuantityRequested, RequestorBudget, RequestorEmail, RequestorIO, Role, RolesForLeadAquisition, SecurityType, Segment, SelectedKits, SelectedServiceType, Service, SetupDate, SetupTime, ShipEndTime, ShipStartTime, ShipToAddress1, ShipToAddress2, ShipToAddress3, ShipToCity, ShipToCustomerOrganization, ShipToLocation, ShipToState, ShipToZip, ShippingType, SolutionArea, SpecialDeliveryInstructions, StartDate, StartTime, State, SubRole, TargetQSOList, TargetRoles, Title, TitlesForLeadAquisition, TitlesForProfiling, TotalQSOsRequested, TriagedStatus, TypeOfAddress, VideoCustomizationCustomization, VideoCustomizationVideo, VideoGreeting, ZipCode } = fromSPRequest;

        // Find service by title
        this.Service = await findServiceByTitle(Service);
        if (!this.Service.ServiceType) {
            await addServiceType(this.Service);
        }

        // Assign ServiceType too
        this.SelectedServiceType = this.Service.ServiceType;

        // Use recommender to determine CustomerOfferSelected (or pull from SelectedKits for EaaS)
        const offerName = CustomerOfferSelected || SelectedKits?.[0];

        if (offerName) {
            const {actualName, amount} = this._determineOfferWithAmount(offerName);
            const results: IOffer[] = await recommend(null, actualName, null, true);
            this.CustomerOfferSelected = results.find(offer => {
                return (
                    offer.kit?.Title === actualName
                    || offer.kit?.Kit === actualName
                    || offer.kit?.Offer === actualName
                );
            })?.kit as CustomerOfferSelectedType;

            if(amount){
                this.Service.AmountRequested = amount;
            }
        }

        const Addon = [];
        if (SelectedKits?.length > 1) {
            const addonNames = SelectedKits.slice(1);

            for (const addonName of addonNames) {
                const {actualName, amount} = this._determineOfferWithAmount(addonName);

                const results: IOffer[] = await recommend(null, actualName, null, true);
        
                const result = results.find(offer => {
                    return (
                        offer.kit?.Title === actualName 
                        || offer.kit?.Kit === actualName
                        || offer.kit?.Offer === actualName
                    );
                })?.kit as IXKitOffer | IEaaSOffer;

                if (result) {
                    result.AmountRequested = amount;
                    Addon.push(result);
                }
            }
        }

        Object.assign<Request, Partial<Request>>(this, { ABEPermission, AIToolType, AccountName, Active_x002f_Inactive, AddOrReplaceAccounts, AdditionalComments, Addon, Address1, Address2, Address3, AddressRequired, AddressUnknown, AdvanceWarehouseEndDate, AdvanceWarehouseEndTime, AdvanceWarehouseStartDate, AdvanceWarehouseStartTime, Alias, AliasesToInclude, AssetFormat, AssetType, AssetUse, Attachments, AudienceSize, BrandingRequirement, BulkUpload, BusinessImpact, CRMAccountId, CampaignName, CampaignOverview, City, CompanyName, CompanySize, ConsumptionKitSelected, ConsumptionServiceType, ContactEmail, ContactEnrichmentText, ContactFirst, ContactLast, ContactPhone, ContentPersonalizationService, CustomerCompanyName, CustomerEmailAddress, CustomerFirstName, CustomerLastName, CustomerOfferKitType, CustomerOrganizationInformation, DatabookInsights, DeliveryAddress1, DeliveryAddress2, DeliveryCity, DeliveryEmail, DeliveryEndTime, DeliveryFirst, DeliveryLast, DeliveryPhoneNumber, DeliveryStartTime, DeliveryState, DeliveryZip, DistributionMethod, Domain, Email, EndDate, EndTime, EstimatedAttendance, EventDescription, EventName, EventOrVMailRecord, EventOwnerEmail, EventOwnerFirst, EventOwnerLast, EventOwnerPhone, EventType, FirstName, GEPMarketingPlay, IOApprover, IONumber, ImmersionTopic, Industry, KitSolutionArea, LastName, Location, LocationType, MCEM, MSXOpportunityId, NamesOfBDMs, NewOrExistingAccount, NotesToCustomer, NotesToServiceDesk, NumberOfAccounts, OU, Objective, OnsiteEmail, OnsiteFirst, OnsiteLast, OnsitePhone, PickupAddress1, PickupAddress2, PickupAddress3, PickupCity, PickupDate, PickupEmail, PickupFirst, PickupLast, PickupPhone, PickupState, PickupTime, PickupZip, PreferredMonth, PrintedCTAInsert, ProductAlignment, QSOLeadLanding, QuantityRequested, RequestorBudget, RequestorEmail, RequestorIO, Role, RolesForLeadAquisition, SecurityType, Segment, SetupDate, SetupTime, ShipEndTime, ShipStartTime, ShipToAddress1, ShipToAddress2, ShipToAddress3, ShipToCity, ShipToCustomerOrganization, ShipToLocation, ShipToState, ShipToZip, ShippingType, SolutionArea, SpecialDeliveryInstructions, StartDate, StartTime, State, SubRole, TargetQSOList, TargetRoles, Title, TitlesForLeadAquisition, TitlesForProfiling, TotalQSOsRequested, TriagedStatus, TypeOfAddress, VideoCustomizationCustomization, VideoCustomizationVideo, VideoGreeting, ZipCode });

        for (const key in this) {
            if (this[key] === null) {
                delete this[key];
            }
        }
    }
    
    public _determineOfferWithAmount(offerName: string): {amount: number, actualName: string}{
        let newName = offerName;
        let amount = 1;

        if(offerName.includes(' x ')) {
            amount = Number(newName.split(' x ')[0]);
            newName = newName.split(' x ')[1];
        }

        return { amount, actualName: newName };
    }

    public toSharePoint(): ISharepointRequest {
        const CustomerOffer: string = this.CustomerOfferSelected?.Title;

        const obj: ISharepointRequest = {};
        Object.assign<ISharepointRequest, Partial<IRequest>>(obj, this);
        Object.assign<ISharepointRequest, ISharepointRequest>(obj, {
            Service: this.Service.Title,
            AIToolType: this.Service.AIToolType,
            SelectedServiceType: this.SelectedServiceType.Title,
            DatabookValueArchitectService: this.DatabookValueArchitectService?.Title,
            CustomerOfferSelected: CustomerOffer,
        });

        if (this.Service.FormName === EServiceFormNames.ResourceKits) {
            // Default QuantityRequested to 1
            obj.QuantityRequested = obj.QuantityRequested || '1';
        }

        delete obj.AddressRequired;
        
        if (this.Service.ServiceType?.FormName === EServiceTypeFormNames.EaaS || this.Service.FormName === EServiceFormNames.XKit || this.Service.FormName === EServiceFormNames.CreativeServices) {
            obj.SelectedKits = [];
            obj.SelectedKits.push(this.Service.AmountRequested + ' x ' + CustomerOffer || this.Service.AmountRequested + ' x ' + this.Service.Title);

            for (const Addon of (obj.Addon || [])) {
                obj.SelectedKits.push(Addon.AmountRequested + ' x ' + Addon.Title);
            }
            if (this.Service.FormName === EServiceFormNames.CreativeServices) {
                if (CustomerOffer.includes('Digital')) {
                    obj.DistributionMethod = 'Digital';
                } else if (CustomerOffer.includes('Physical')) {
                    obj.DistributionMethod = 'Physical';
                }
            }
            delete obj.CustomerOfferSelected;
            delete obj.AIToolType;
            obj.Title = obj.Email;
            delete obj.Email;
        }

        delete obj.AmountRequested;
        delete obj.Addon;

        return obj;
    }
}

export interface ISharepointRequest extends Partial<Modify<Request, {
    Service: string;
    SelectedServiceType: string;
    DatabookValueArchitectService: string;
    CustomerOfferSelected: string;
    IsAvailable?: boolean;
}>> {};

export enum EListAcronym {
    MaaS = 'MaaS',
    EaaS = 'EaaS',
    XKit = 'XKit',
}

export const USMaaSRequestListName: string = 'MaaS Requests';
export const XKitRequestListName: string = 'XKit Requests';
export const EaaSRequestListName: string = 'EaaS Requests';

