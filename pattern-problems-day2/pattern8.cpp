#include<iostream>
    void pattern8(int n)
    {
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<i;j++)
            {
                std::cout<<" ";
            }
            for(int j=0;j<2*n-(2*i+1);j++)
            {
            
            std::cout<<"*";
        }
         for (int j =0; j<i; j++)
        {
            std::cout <<" ";
        }
            std::cout<<"\n";
        }
    }
    int main()
    {
        int n;
        std::cout<<"enter the value of n:";
        std::cin>>n;
        pattern8(n);
        return(0);
    }