import React from 'react'
import { backIcon } from '@/public/assets/images'
import Image from 'next/image'
import { inviteRewards } from '@/data'

const InviteModal = ({isOpen, isClosed, referralCode, onCopy, copied}) => {
    
    return (!isOpen ? null : (
        <div
        className='fixed inset-0 xs:p-3 xr:p-8 bg-[#C4DACC] bg-opacity-25 backdrop-brightness-50 flex justify-center items-center z-[999]'>
            <div
            className='flex flex-col bg-[#CEE4D6] rounded-3xl p-4  w-full'>
                <div className='flex'>
                    <Image 
                    src={backIcon}
                    alt='back arrow'
                    width={45}
                    className='flex cursor-pointer'
                    onClick={isClosed}/>

                    <p
                    className='flex justify-center font-semibold mt-4 mb-3 ml-11 mx-auto'>
                        Invitation Rewards:
                    </p>
                </div>

                <ul className='px-2 list-disc space-y-2'>
                    {inviteRewards.map((reward) => (
                        <li
                        key={reward.id}
                        className='list-disc xs:my-2 xr:text-[15px] xr:my-2 xs:text-[14px] flex justify-center'>
                            {reward.invite}
                        </li>
                    ))}
                </ul>

                    {/** COPY INVITE LINK BUTTON 367378 */}
                {!copied ? (
                    <button 
                    type="button"
                    onClick={onCopy}
                    className='text-[#FFFFFF] w-full hover:bg-[#02363b] bg-[#004A50] rounded-2xl px-5 py-3 mt-4 cursor-pointer transition'
                        >COPY INVITE CODE
                    </button>
                ) : (
                    <button 
                    type="button"
                    onClick={onCopy}
                    className='text-[#FFFFFF] w-full hover:bg-[#367378] bg-[#367378] rounded-2xl px-5 py-3 mt-4 cursor-pointer'
                        >COPIED: {referralCode}
                    </button>
                )}
            </div>
        </div>
    ))
}

export default InviteModal