import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: November 23, 2019</p>

      <p>
        Welcome to Boxitonline.com, a peer-to-peer storage space rental marketplace and online service 
        provided by Marco Nicotra, hereafter Boxitonline, we or us. 
        This Terms of Service Agreement (the Agreement) describes the terms and conditions that govern 
        your use of and participation in Boxitonline services (the Service(s)). 
        By accessing or using the Service, you signify that you have read, understood, and agree to be bound by this Agreement.  
        If you do not agree to any of these terms or any future amendments, do not use or access (or continue to access) the Service. 
        This Agreement applies to all visitors, users, and others who access the Service (the Users).
      </p>

      <p>
        Please read this agreement carefully to ensure that you understand each provision, 
        as well as acknowledge and agree that Boxitonline is not a party to any agreements entered 
        into between renters and owners, nor is Boxitonline an agent or insurer. 
        Boxitonline has no control over the conduct of renters or other users of the service and 
        disclaims all liability in this regard.  This agreement contains a mandatory arbitration of 
        disputes provision that requires the use of arbitration on an individual basis to resolve disputes, 
        rather than jury trials or class actions, and also limits the remedies available to you in the event of a dispute.
      </p>

      <h2>Article 1 – General Provisions</h2>
      <p>
        •	These terms of service form a legally binding agreement between you and Boxitonline and govern the use 
        of this website and our services. 
      </p>
          
      <p>
        •	By registering your details on our website, or using any services provided by Boxitonline, 
        you agree to be bound by these terms of service. If you do not accept all the terms of service, 
        you must not use or access the website.
      </p>

      <p>
        •	The Services are provided to facilitate the provision of storage space by Users advertising such space (Storage Providers) 
        to Users storing items in such space (Storage Seekers), who will jointly enter into a separate agreement (Storage Agreement). 
        Therefore, Boxitonline functions as a platform to provide advertising space and is not a rental agent or property broker.
      </p>

      <p>
        •	This Service is intended solely for people eighteen (18) years of age or older, and any registration, 
        use or access to the Service by anyone under 18 is strictly prohibited. 
        Boxitonline reserves the right to limit or restrict access by any person, in our sole discretion.
      </p>

      <p>
        •	Boxitonline has the right to limit your activity on the website or terminate your User registration or 
        any of the listed storage spaces without notice to the User for any reason, but in any case, 
        following a breach of these terms of service. 
      </p>

      <p>
        •	This Agreement, together with all amendments, all documents referenced in this Agreement, 
        and any other legal notices and agreements published by Boxitonline via the Service, 
        shall constitute the entire legal agreement between the User and Boxitonline concerning the Service.
      </p>

      <p>
        •	In the event that one or more of the provisions in these terms and conditions are found to be void, 
        either in whole or in part, the remaining provisions will remain in force. 
        Boxitonline and User will jointly discuss and formulate new provisions to replace the voided provisions, 
        during which the scope of the original provisions has to be considered carefully.
      </p>

      <p>
        •	Boxitonline is permitted to amend these terms and conditions unilaterally. 
        The amended terms and conditions are immediately applicable to Storage Agreements and the Agreement 
        between User and Boxitonline and 30 days after written announcement of the amendment to the User for 
        previously existent Agreements and Storage Agreements. 
      </p>


      <h2>Article 2 – Obligations of all Users</h2>
      <p>
        •	It is the responsibility of the User to keep the registration details of your account on our website safe 
        and confidential and not to disclose them to anybody else. 
        You are responsible for the activity carried out using your User account, whether or not you have allowed or facilitated it.
      </p>

      <p>
        •	The following items are not allowed to be stored under any circumstances: toxic, polluted, or contaminated goods; 
        firearms; munitions; weapons or explosives; radioactive materials; highly flammable or hazardous goods; 
        living plants or animals; food or perishable goods; anything damp, mouldy, rotten or infested or damaged by parasites; 
        any items with a strong odour; cash and securities; illegal goods not mentioned yet; waste; 
        or any item or good which would invalidate any insurance policy which would otherwise the items in the storage space. 
      </p>


      <h2>Article 3 – Obligations specific to the Storage Provider</h2>
      <p>
        •	The Storage Provider must provide accurate, complete, and up-to-date information relating to the storing space. 
        In the event that the storage space becomes unavailable for any reason, you agree to remove or suspend the listing 
        as soon as reasonably practicable.
      </p>

      <p>
        •	The Storage Provider will use all reasonable efforts to protect and maintain the security of the goods that are stored 
        in its space and ensure that they remain undisturbed and undertake to ensure that these goods are secured and protected 
        as they would their own property. 
      </p>

      <p>
        •	The Storage Provider agrees to offer reasonable compensation to the Storage Seeker in the event of damage to or loss 
        of the goods that are stored in its storage space. Reasonable compensation entails paying for the repairs of the damage, 
        or where the goods are damaged beyond repair, providing a compensation of no more than the cash value of the good(s). 
        Compensation will not be offered for any loss: (a) in respect of which a payment is made under an insurance policy; 
        (b) caused by any act or negligent act or omission by the Storage Seeker him-/herself.
      </p>

      <p>
        •	If the Storage Provider wishes to terminate the Storage Agreement, for reasons other than a breach of this Agreement 
        by the Storage Seeker, the Storage Provider will give at least six (6) weeks’ notice prior to removal of the goods. 
      </p>

      <p>
        •	It is the Storage Provider’s own responsibility to ensure that advertising your storage space will not breach 
        any applicable mortgage, insurance, rent agreement, or other agreement or policy. 
        Any applicable restrictions put forward by these should be included in the advertisement.
      </p>

      <p>
        •	By uploading any information or material to the website, the User automatically grants Boxitonline a royalty-free, 
        non-exclusive right and license to use, reproduce, modify, edit, adapt, publish, translate, distribute and display this material. 
      </p>


      <h2>Article 4 – Obligations specific to the Storage Seeker</h2>
      <p>
        •	The Storage Seeker hereby undertakes to pay the fee(s) promptly and fully. 
      </p>

      <p>
        •	The Storage Seeker will ensure to comply with all access and security arrangements set out in the Storage Agreement, 
        keep safe any keys and other items which are related to the storage space, and most certainly not allow any third persons 
        or parties to access the storage space unless accompanied by either the Storage Seeker or the Storage Provider.
      </p>

      <p>
        •	The Storage Seeker will reasonably compensate the Storage Provider for any damage caused to the storage space by its goods, 
        or by any negligent act or omission by the Storage Seeker. 
        This reasonable compensation encompasses the repairs, or replacement where the storage space or even entire address or 
        part thereof is/are damaged beyond repairs. 
      </p>

      <p>
        •	The Storage Seeker will remove any and all goods from the storage space upon request by the Storage Provider, 
        provided that the Storage Provider gives at least six weeks’ notice in writing of this request if this is earlier than 
        the termination date of the Storage Agreement.
      </p>

      <p>
        •	If the Storage Agreement expires at the end of the term imbedded in it, the Storage Seeker agrees to remove all stored goods 
        from the storage space within 24 hours.
      </p>


      <h2>Article 5 – Payment and fees</h2>
      <p>
        •	All payments between the Storage Provider and Storage Seeker take place through the platform on Boxitonline’s website. 
      </p>

      <p>
        •	Boxitonline shall charge a commission of …% of the price set by the Storage Provider. 
        This will be added to the price automatically, and the Storage Seeker will pay the total amount through the payment platform, 
        through which the payments to the Storage Provider and Boxitonline are processed. 
      </p>

      <p>
        •	Under absolutely no circumstances may the Storage Provider solicit or accept a payment or fees or charges relating to Boxitonline
         in cash or via direct bank transfer or another means of payment which circumvents Boxitonline. 
         Similarly, under no circumstances may the Storage Seeker offer to do so. 
         Any breach of this clause will immediately result in the deletion off all accounts involved in such breach, and you agree, 
         where you are found to be knowingly involved, to be liable to pay Boxitonline compensation for the commission it would have been 
         due had Boxitonline be involved in accordance with these terms of service. 
      </p>

      <p>
        •	Non-payment of the fees to the Storage Provider by the Storage Seeker will give the right to the Storage Provider to deny 
        the Storage Seeker access to the storage space and may hold on to or move the goods already stored at its discretion.
      </p>

      <p>
        •	The monthly storage price agreed between the Storage Seeker and Storage Provider will remain fixed for at least the first 12 months 
        of the Storage Agreement. After this initial period, the Storage Provider may increase the monthly price by up to 3% a year, 
        providing they give a 30-day written notice to the Storage Seeker and Boxitonline in advance. 
      </p>


      <h2>Article 6 – Liability and Indemnification</h2>
      <p>
        •	Boxitonline is not liable for damage caused by a User’s performance of the (Storage) Agreement, except in the case of intent or 
        deliberate recklessness on the part of Boxitonline provided that it has been demonstrated by the User.
      </p>

      <p>
        •	In any case, the liability is limited to the amount that the liability insurance of Boxitonline covers.
      </p>

      <p>
        •	The User indemnifies Boxitonline against all claims from third parties for compensation of damage. 
        If Boxitonline is held liable by a third party in relation to the Agreement or the Storage Agreement, 
        the User is obliged to pay Boxitonline all costs related to this, and the User is obliged to take responsibility for the liability 
        directly (inter alia) by notifying the third party that Boxitonline is not liable, but that the User is. 
        If the User fails to do so, this automatically creates a right to claim from Boxitonline against the User for the amount 
        for which Boxitonline is held liable.
      </p>

      <p>
        •	Every claim for compensation on Boxitonline is barred by the lapse of one year after the start of the day following that 
        on which the User became aware of the damage.
      </p>

      <p>
        •	If Boxitonline is deemed liable, this liability is at all times limited to direct damage. 
        Boxitonline is not liable for indirect and/or consequential damage.
      </p>

      <p>
        •	The User is liable for all damage that Boxitonline incurs as a result of a failure attributable to the User in the fulfilment 
        of the obligations arising from the (Storage) Agreement.
      </p>

      <p>
        •	Boxitonline provides its website and Services on an ‘as is’ and ‘as available’ basis. 
        Any implied warranty of satisfactory quality and fitness for a particular purpose are hereby excluded. 
      </p>

      <p>
        •	All arrangements carried out through our website are completely at your own risk. 
        Boxitonline and its officers, directors, investors, and employees exclude to the fullest extent permitted by applicable law 
        all liability for any claims, demands, losses, damages, costs and expenses, arising out of or in any way connected to 
        our Services and website.  
      </p>

      <p>
        •	Storage Providers provide in good faith the information about their storage space. 
        Boxitonline does not control or inspect the condition or nature of the advertised storage space. 
        Both the Storage Provider and Storage Seeker should undertake to use caution, common sense, and safe trading when using our website. 
      </p>


      <h2>Article 7 – Confidentiality</h2>
      <p>
        •	Users are obliged to maintain the confidentiality of all information that they have received from Boxitonline, each other, 
        or from another source in the context of the Agreement. 
        Confidential information means in any case that to which this Article relates, as well as any company data.
      </p>

      <p>
        •	The confidentiality obligation mentioned in the first paragraph of this article does not apply to information:
      </p>

      <p>
        •	that at the time the recipient received this information was already public or subsequently became public 
        without a breach by the receiving party of a duty of confidentiality imposed on him;
      </p>

      <p>
        •	of which the receiving party can prove that this information was already in his possession at the time the other party provided it;
      </p>

      <p>
        •	that the receiving party has received from a third party whereby that third party was entitled to provide this information 
        to the receiving party;
      </p>

      <p>
        •	that is made public by the receiving party as a result of a legal obligation.
      </p>

      <p>
        •	The obligation of confidentiality described in this article applies for the duration of this Agreement and will continue to exist
         after the termination, dissolution or completion of the Agreement.
      </p>

      
      <h2>Article 8 – Intellectual Property</h2>
      <p>
        •	Unless otherwise agreed upon in writing, Boxitonline retains all rights and powers that accrue to it with regard to 
        the intellectual property in the website and any works produced by it. 
        The ownership of the products and Services supplied by Boxitonline such as video productions, provided ideas, images, 
        concepts, scripts, scripts, illustrations or (test) designs etc. therefore remains wholly owned by Boxitonline. 
        The aforementioned elements that form part of the works produced by Boxitonline may not be multiplied, 
        reproduced or modified without written permission from Boxitonline.
      </p>

      <p>
        •	The User receives a license from Boxitonline for the use of copyrighted works that Boxitonline created in the execution 
        of its Services. This license only applies as long as the User meets its financial obligations and the license terminates when 
        the Agreement does. The license only applies to the use of the work in question by the User himself, 
        or by his legal successors, not any third party.
      </p>

      <p>
        •	  User is prohibited from reproducing, duplicating, copying, selling, reselling, or exploiting any portion of the Services and/or 
        products, or access to the Services on the website through which the Services are provided, without express written permission by us. 
      </p>

      <p>
        •	In general, User are prohibited from using Boxtitonline’s trademarks, logos, slogans, and service marks for any purpose. 
        Users are equally prohibited from modifying, copying, distributing, transmitting, displaying, publishing, selling, licensing, 
        creating derivative works, or using any content available on or through our website, whether or not this constitutes copyright 
        infringement.
      </p>


      <h2>Article 9 – Arbitration</h2>
      <p>
        •	All claims and disputes arising under or relating to this Agreement or the Storage agreement are to be settled by binding 
        arbitration in the state of the Netherlands. 
        The parties expressly agree to abide by any and all rules of the Netherlands Arbitration Institute (NAI).
      </p>

      <p>
        •	The award rendered by the arbitrator shall include costs of arbitration, reasonable attorney's fees and reasonable costs 
        for expert and other witnesses, and any judgment on the award rendered by the arbitrator may be entered in any court of 
        competent jurisdiction. 
      </p>

      <p>
        •	In the event that a party fails to pay any award, the award may be converted to judgment in the Court of Amsterdam. 
      </p>


      <h2>Article 10 – Governing Law</h2>
      <p>
        •	These terms of service are governed by and construed in accordance with Dutch law.
      </p>
      
      <p>
        •	The Court of Amsterdam is competent (in the first instance) to take cognizance of any dispute between Boxitonline and the User, 
        unless the law prescribes otherwise.
      </p>
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
